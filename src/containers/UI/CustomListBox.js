import React from 'react';
import { ListBox, ListBoxToolbar, processListBoxData, processListBoxDragAndDrop } from '@progress/kendo-react-listbox';


const SELECTED_FIELD = "selected";

function CustomListBox(props) {

  const [state, setState] = React.useState({
    boxOneData: props.data,
    boxTwoData: [],
    draggedItem: {},
    addValue: ''
  });

  const handleItemClick = (event, data, connectedData) => {
    setState({
      ...state,
      [data]: state[data].map((item) => {
        if (item.name === event.dataItem.name) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }

        return item;
      }),
      [connectedData]: state[connectedData].map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
      }),
    });
  };

  const handleToolBarClick = (e) => {
    let toolName = e.toolName || "";
    let result = processListBoxData(
      state.boxOneData,
      state.boxTwoData,
      toolName,
      SELECTED_FIELD
    );
    setState({
      ...state,
      boxOneData: result.listBoxOneData,
      boxTwoData: result.listBoxTwoData,
    },
      updateCurrent(result.listBoxTwoData)
    );

  };

  const handleDragStart = (e) => {
    setState({ ...state, draggedItem: e.dataItem });
  };

  const handleDrop = (e) => {
    let result = processListBoxDragAndDrop(
      state.boxOneData,
      state.boxTwoData,
      state.draggedItem,
      e.dataItem,
      "name"
    );
    setState({
      ...state,
      boxOneData: result.listBoxOneData,
      boxTwoData: result.listBoxTwoData,
    },
      updateCurrent(result.listBoxTwoData)
    );
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {


      state.boxOneData.push({
        name: state.addValue,
        selected: false,
      })

      setState({
        ...state,
        addValue: '',
      });
    }
  }

  const updateCurrent = (current) => {
    let arr = [];
    current.forEach(element => arr.push(element.name))
    props.update(arr)
  }

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">

        <div className="col k-pr-3">
          <label for="add">{props.addHeader}</label>
          <input type="text" id="add" name="add" required
            minLength="4" maxLength="200" size="20"
            value={state.addValue}
            onChange={(e) => setState({ ...state, addValue: e.target.value })}
            onKeyDown={(e) => handleKeyPress(e)}></input>
        </div>

        <div className="col k-pr-2">
          <h6>{props.boxOneHeader}</h6>
          <ListBox
            style={{
              height: props.boxOneHeight,
              width: "100%",
            }}
            data={state.boxOneData}
            textField="name"
            selectedField={SELECTED_FIELD}
            onItemClick={(e) => handleItemClick(e, "boxOneData", "boxTwoData")}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            toolbar={() => {
              return (
                <ListBoxToolbar
                  tools={[
                    "moveUp",
                    "moveDown",
                    "transferTo",
                    "transferFrom",
                    "transferAllTo",
                    "transferAllFrom",
                    "remove",
                  ]}
                  data={state.boxOneData}
                  dataConnected={state.boxTwoData}
                  onToolClick={handleToolBarClick}
                />
              );
            }}
          />
        </div>
        <div className="col k-pl-0">
          <h6>{props.boxTwoHeader}</h6>
          <ListBox
            style={{
              height: props.boxTwoHeight,
              width: "100%",
            }}
            data={state.boxTwoData}
            textField="name"
            selectedField={SELECTED_FIELD}
            onItemClick={(e) => handleItemClick(e, "boxTwoData", "boxOneData")}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        </div>
      </div>
    </div>
  );

}

export default CustomListBox;

