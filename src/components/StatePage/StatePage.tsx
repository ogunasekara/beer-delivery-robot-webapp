import { DispenserState } from "./DispenserState";
import { ErrorState } from "./ErrorState";
import { RobotState } from "./RobotState";

export default function StatePage() {
    return <div>
        <RobotState />
        <DispenserState />
        <ErrorState />
    </div>
}