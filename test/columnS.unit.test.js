import columnServ from '../services/columnS';

test('Get type params for GetColumn', () =>{
    expect(columnServ.validateGetColumnParams('12312')).toBe('string');
})

test('Validate params for PushColumn', () =>{
    expect(columnServ.validatePushColumnParams({idColumn: '', title: ''})).toBe(true);
    expect(columnServ.validatePushColumnParams({idColumn: 0, title: ''})).toBe(false);
    expect(columnServ.validatePushColumnParams({idColumn: '', title: 0})).toBe(false);
    expect(columnServ.validatePushColumnParams({idColumn: 0, title: 0})).toBe(false);
    expect(columnServ.validatePushColumnParams({idColumn: ''})).toBe(false);
    expect(columnServ.validatePushColumnParams({title: ''})).toBe(false);
})