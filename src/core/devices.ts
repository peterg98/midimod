import easymidi from "easymidi";

/**
 * Returns an array of available MIDI input device names. These names may be then used
 * in easymidi.Input(name) to get the input object.
 *
 * @returns an array of a string of MIDI input device names
 */
const listMidiDevices = (): string[] => {
  return easymidi.getInputs();
};

const useMidiDevice = (deviceName: string) => {
  return new easymidi.Input(deviceName);
};

const createVirtualMidiDevice = (deviceName: string) => {};
