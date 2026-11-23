const FORBIDDEN_PATH_SEGMENTS = new Set(['__proto__', 'prototype', 'constructor']);
const ARRAY_INDEX = /^\d+$/;

/**
 * Merges flat environment overrides into a copy of the bundled configuration.
 *
 * Keys are dotted paths into the configuration (`services.log.level`). A value is applied only when the path already
 * exists in the configuration; the configured value's type decides the coercion (boolean, number, string). Objects and
 * arrays are never replaced. Empty and unknown values are ignored with a warning, so a typo in an environment variable
 * never breaks application startup.
 *
 * Paths that could reach prototypes, inherited properties or an array's metadata (`length`) are rejected. Non-string
 * primitive values are stringified, so a value accidentally written as a boolean or a number still behaves as typed in
 * the configuration.
 *
 * @param base configuration to copy and override (nae.json)
 * @param overrides flat map of dotted configuration paths to raw environment values
 * @returns a deep copy of `base` with the applicable overrides applied
 */
export function mergeEnvConfig<T>(base: T, overrides: Record<string, string | undefined> | undefined): T {
    const result: any = JSON.parse(JSON.stringify(base));
    for (const [path, rawValue] of Object.entries(overrides ?? {})) {
        if (rawValue !== null && typeof rawValue === 'object') {
            console.warn(`[env] Cannot override "${path}" with an object, ignoring.`);
            continue;
        }
        const value = String(rawValue ?? '').trim();
        if (!value) {
            continue;
        }
        const segments = path.split('.');
        if (segments.some(segment => FORBIDDEN_PATH_SEGMENTS.has(segment))) {
            console.warn(`[env] Refusing unsafe configuration path "${path}", ignoring.`);
            continue;
        }
        let target: any = result;
        let resolved = true;
        for (const segment of segments.slice(0, -1)) {
            if (target?.[segment] === null || typeof target?.[segment] !== 'object') {
                resolved = false;
                break;
            }
            target = target[segment];
        }
        const leaf = segments[segments.length - 1];
        if (!resolved || !target
            || !Object.prototype.hasOwnProperty.call(target, leaf)
            || (Array.isArray(target) && !ARRAY_INDEX.test(leaf))) {
            console.warn(`[env] Unknown configuration path "${path}", ignoring.`);
            continue;
        }
        const current = target[leaf];
        if (typeof current === 'object') {
            console.warn(`[env] Cannot override object at "${path}", ignoring.`);
            continue;
        }
        if (typeof current === 'number') {
            const parsed = Number(value);
            target[leaf] = Number.isNaN(parsed) ? current : parsed;
            continue;
        }
        target[leaf] = typeof current === 'boolean' ? value === 'true' : value;
    }
    return result;
}
