import {validateParamsForPushFile} from '../services/fileS';

test('Validate data for PushFile', () =>{
    expect(validateParamsForPushFile({
        id_file: '',
        idCard: ''
    })).toBe(true);

    expect(validateParamsForPushFile({
        id_file: 0,
        idCard: ''
    })).toBe(false);

    expect(validateParamsForPushFile({
        id_file: '',
        idCard: 0
    })).toBe(false);

    expect(validateParamsForPushFile({
        id_file: 'Id_File',
        idCard: ''
    })).toBe(true);

    expect(validateParamsForPushFile({
        id_file: 'Id File',
        idCard: ''
    })).toBe(false);

    expect(validateParamsForPushFile({
        idCard: ''
    })).toBe(false);

    expect(validateParamsForPushFile({
        id_file: 'Id_file'
    })).toBe(false);

    expect(validateParamsForPushFile({})).toBe(false);
})
