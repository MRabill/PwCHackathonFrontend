import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
} from 'reactflow';

import { notification, message, Typography } from 'antd';
import Sidebar from './SideBar';
import RequestNode from './Node/RequestNode';
import KYCIntegration from './Node/KYCIntegration';
import ActionNode from './Node/ActionNode';

import 'reactflow/dist/style.css';
import '../../styles/Integration/IntegrationArea.css';
import '../../styles/Integration/Node.css';
import url from '../../../utils/url';

const initialNodes = [
  //   {
  //     id: 'dndnode_1',
  //     type: 'InputNode',
  //     position: { x: 0, y: 0 },
  //     data: { value: 123 },
  //   },
];
const userId = '123';

const nodeTypes = {
  RequestNode: RequestNode,
  KYCIntegration: KYCIntegration,
  ActionNode: ActionNode,
};

let id = 3;
const getId = () => `dndnode_${id++}`;

function IntegrationArea() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const endpoint = `https://mrindustries/publish/${apiKey}`;

  const [api, contextHolder] = notification.useNotification();
  const [messageApi, messageApicontextHolder] = message.useMessage();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const publish = () => {
    setLoading(true);
    console.log({ ertere: configJSON });
    publishMutation.mutate(configJSON);
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // console.log(type);

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: type,
        type,
        position,
        data: {
          addParametersElement: addParametersElement,
          addIntegrationElement: addIntegrationElement,
        },
      };
    },
    [reactFlowInstance]
  );

  return (
    <div
      className="dndflow"
      style={{ width: '100vw', height: '100vh', background: 'white' }}
    >
      {messageApicontextHolder}
      <ReactFlowProvider>
        <Sidebar />

        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background color="#ccc" variant={'dots'} />

            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default IntegrationArea;
