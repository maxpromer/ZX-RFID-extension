Blockly.Python['rfid_is_detected'] = function (block) {
  Blockly.Python.definitions_['import_RFID'] = 'import RFID';

  var code = `SHT30.isDetected()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rfid_read_uid'] = function (block) {
  Blockly.Python.definitions_['import_RFID'] = 'import RFID';

  var code = `SHT30.readUID()`;
  return [code, Blockly.Python.ORDER_NONE];
};

