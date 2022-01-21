const cardServ = require('../services/cardS');

test('Get type params for GetCard', () =>{
    expect(cardServ.validateGetCardParams('IdCard')).toBe('string');
})

test('Validate params for PushCard', () =>{
    expect(cardServ.validatePushCardParams({idColumn: '', title: '', idCard: '', description: ''})).toBe(true);
    expect(cardServ.validatePushCardParams({idCard: 0, title: ''})).toBe(false);
    expect(cardServ.validatePushCardParams({idCard: '', title: 0})).toBe(false);
    expect(cardServ.validatePushCardParams({idCard: 0, title: 0})).toBe(false);
    expect(cardServ.validatePushCardParams({idCard: ''})).toBe(false);
    expect(cardServ.validatePushCardParams({})).toBe(false);
})