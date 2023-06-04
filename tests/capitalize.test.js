import capitalize from '../scripts/capitalize'

test('Capitalize the first letter of a string', () => {
    expect(capitalize('text')).toBe('Text')
})