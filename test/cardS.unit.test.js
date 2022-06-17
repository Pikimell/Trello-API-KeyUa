import {validateGetCardParams,validatePushCardParams} from '../services/cardS';

test('Get type params for GetCard', () =>{
    expect(validateGetCardParams('IdCard')).toBe('string');
})

test('Validate params for PushCard', () =>{
    expect(validatePushCardParams({idColumn: '', title: '', idCard: '', description: ''})).toBe(true);
    expect(validatePushCardParams({idCard: 0, title: ''})).toBe(false);
    expect(validatePushCardParams({idCard: '', title: 0})).toBe(false);
    expect(validatePushCardParams({idCard: 0, title: 0})).toBe(false);
    expect(validatePushCardParams({idCard: ''})).toBe(false);
    expect(validatePushCardParams({})).toBe(false);
})