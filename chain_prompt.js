/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {Error} If input is not a valid non-empty string
 */
function toKebabCase(str) {
    // Input validation: check if input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim whitespace and validate non-empty
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error('Input string cannot be empty or contain only whitespace');
    }

    // Insert hyphens before uppercase letters (handles camelCase and PascalCase)
    let result = trimmed.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Replace underscores, spaces, and multiple hyphens with single hyphen
    result = result.replace(/[_\s]+/g, '-');
    result = result.replace(/-+/g, '-');

    // Convert to lowercase
    result = result.toLowerCase();

    // Remove leading/trailing hyphens that may result from special characters
    result = result.replace(/^-+|-+$/g, '');

    return result;
}

// ============ Example Test Calls ============

// Valid usage examples
console.log('Valid cases:');
console.log(toKebabCase('hello')); // 'hello'
console.log(toKebabCase('helloWorld')); // 'hello-world'
console.log(toKebabCase('HelloWorld')); // 'hello-world'
console.log(toKebabCase('hello_world')); // 'hello-world'
console.log(toKebabCase('hello world')); // 'hello-world'
console.log(toKebabCase('hello---world')); // 'hello-world'
console.log(toKebabCase('hello_World Test')); // 'hello-world-test'
console.log(toKebabCase('  spaced  string  ')); // 'spaced-string'

// Invalid usage examples
console.log('\nInvalid cases:');
try {
    toKebabCase(null); // throws error
} catch (e) {
    console.log('Error:', e.message);
}

try {
    toKebabCase(undefined); // throws error
} catch (e) {
    console.log('Error:', e.message);
}

try {
    toKebabCase(123); // throws error
} catch (e) {
    console.log('Error:', e.message);
}

try {
    toKebabCase(''); // throws error
} catch (e) {
    console.log('Error:', e.message);
}

try {
    toKebabCase('   '); // throws error
} catch (e) {
    console.log('Error:', e.message);
}