import * as React from "react";
import styled from "styled-components";
import { Popover, Button, Navbar, Alignment } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { useState } from "react";

export function App(): React.ReactElement<Record<string, unknown>> {
  const [currentMidiDevice, setCurrentMidiDevice] = useState(null);
  const [midiDeviceList, setMidiDeviceList] = useState([]);

  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>midimod</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp5-minimal" icon="home" text="Velocity Curve" />
          <Button className="bp5-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <Button>Scan MIDI devices</Button>
      <Select onItemSelect={setCurrentMidiDevice}>
        <Button
          rightIcon="caret-down"
          text={currentMidiDevice ?? "(No selection)"}
        />
      </Select>
    </div>
  );
}
