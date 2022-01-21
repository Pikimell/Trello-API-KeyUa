const fileServ = require('../services/fileS');

test('Validate data for PushFile', () =>{
    expect(fileServ.validateParamsForPushFile({
        id_file: '',
        idCard: ''
    })).toBe(true);

    expect(fileServ.validateParamsForPushFile({
        id_file: 0,
        idCard: ''
    })).toBe(false);

    expect(fileServ.validateParamsForPushFile({
        id_file: '',
        idCard: 0
    })).toBe(false);

    expect(fileServ.validateParamsForPushFile({
        id_file: 'Id_File',
        idCard: ''
    })).toBe(true);

    expect(fileServ.validateParamsForPushFile({
        id_file: 'Id File',
        idCard: ''
    })).toBe(false);

    expect(fileServ.validateParamsForPushFile({
        idCard: ''
    })).toBe(false);

    expect(fileServ.validateParamsForPushFile({
        id_file: 'Id_file'
    })).toBe(false);

    expect(fileServ.validateParamsForPushFile({})).toBe(false);
})
