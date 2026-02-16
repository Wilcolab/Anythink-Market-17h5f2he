/**
 * String case conversion utility module
 * 
 * Provides functions to convert strings between various naming conventions.
 * Handles multiple delimiters (spaces, hyphens, underscores) and special characters.
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 */

/**
 * Converts a string to camelCase format.
 * 
 * Transforms input by splitting on delimiters (spaces, hyphens, underscores),
 * removing special characters, and capitalizing appropriately. The first word
 * remains lowercase while subsequent words are capitalized.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase. Can contain spaces,
 *                         hyphens, underscores, or already be in camelCase.
 * @returns {string} The camelCase version of the input string with special
 *                   characters removed and alphanumeric characters preserved.
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is empty or contains only whitespace after trimming
 * 
 * @example
 * toCamelCase('hello world');              // → "helloWorld"
 * toCamelCase('Hello-world_test');         // → "helloWorldTest"
 * toCamelCase('foo  bar--baz__qux');       // → "fooBarBazQux"
 * toCamelCase('  leading and trailing  '); // → "leadingAndTrailing"
 * toCamelCase('test123with456numbers');    // → "test123with456numbers"
 * 
 * @example
 * // Error handling
 * toCamelCase(123);        // throws Error: Expected a string, but received number
 * toCamelCase('');         // throws Error: Input cannot be empty or contain only whitespace
 * toCamelCase(null);       // throws Error: Input cannot be null or undefined
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input by splitting on delimiters (spaces, hyphens, underscores),
 * converting to lowercase, removing special characters, and joining with dots.
 * Useful for configuration keys, file names, or hierarchical naming conventions.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case. Can contain spaces,
 *                         hyphens, underscores, or mixed case characters.
 * @returns {string} The dot.case version of the input string with all characters
 *                   in lowercase, special characters removed, and words joined by dots.
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is empty or contains only whitespace after trimming
 * 
 * @example
 * toDotCase('hello world');              // → "hello.world"
 * toDotCase('Hello-world_test');         // → "hello.world.test"
 * toDotCase('foo  bar--baz__qux');       // → "foo.bar.baz.qux"
 * toDotCase('  leading and trailing  '); // → "leading.and.trailing"
 * toDotCase('test123with456numbers');    // → "test123.with456.numbers"
 * 
 * @example
 * // Error handling
 * toDotCase(123);    // throws Error: Expected a string, but received number
 * toDotCase('');     // throws Error: Input cannot be empty or contain only whitespace
 */
