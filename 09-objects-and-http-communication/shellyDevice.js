function shellyDevice(name, inputs, connectivity) {
    let device = {};
    device.name = name;
    device.inputs = inputs;
    // device.connectivity = connectivity;
    device['connectivity'] = connectivity;
    
    return device;
  }
  
  let shelly1 = shellyDevice('Shelly Pro 1', 1, 'WiFi');
  let shelly2 = shellyDevice('Shelly Pro 2', 2, 'Bluetooth');
  let shelly3 = shellyDevice('Shelly Pro 2', 2, 'Bluetooth');
  
  console.log(JSON.stringify(shelly1));
  console.log(JSON.stringify(shelly2));
  console.log(JSON.stringify(shelly3));
  
  console.log("Shelly 2 inputs:", shelly2.inputs);
  shelly2.inputs = 3;
  console.log("Shelly 2 inputs:", shelly2.inputs);