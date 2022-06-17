import {validateGetColumnParams,validatePushColumnParams} from '../services/columnS';

test('Get type params for GetColumn', () =>{
    expect(validateGetColumnParams('12312')).toBe('string');
})

test('Validate params for PushColumn', () =>{
    expect(validatePushColumnParams({idColumn: '', title: ''})).toBe(true);
    expect(validatePushColumnParams({idColumn: 0, title: ''})).toBe(false);
    expect(validatePushColumnParams({idColumn: '', title: 0})).toBe(false);
    expect(validatePushColumnParams({idColumn: 0, title: 0})).toBe(false);
    expect(validatePushColumnParams({idColumn: ''})).toBe(false);
    expect(validatePushColumnParams({title: ''})).toBe(false);
})