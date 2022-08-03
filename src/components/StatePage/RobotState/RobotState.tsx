import { useEffect, useState } from "react";

export default function RobotState(props: any) {
    const { rosClient } = props;
    const [robotState, setRobotState] = useState([0, 0, 0]);

    useEffect(() => {
        if (!rosClient) return;
        
        var ROSLIB = require('roslib');

        var odomListener = new ROSLIB.Topic({
            ros: rosClient,
            name: '/tj2/odom',
            messageType: 'nav_msgs/msg/Odometry'
        });

        const odomCallback = (msg: any) => {
            setRobotState([
                msg.pose.pose.position.x,
                msg.pose.pose.position.y,
                msg.pose.pose.position.z
            ])
        };

        odomListener.subscribe(odomCallback);

        return () => {
            odomListener.unsubscribe(odomCallback);
        };
    }, [rosClient]);

    return (
    <div>
        <h1>Robot</h1>
        <div>State: <span>{robotState[0] + ', ' + robotState[1] + ', ' + robotState[2]}</span></div>
        <div>Battery: <span>N/A</span></div>
        <div>Connection: <span>Disconnected</span></div>
    </div>
    );
}