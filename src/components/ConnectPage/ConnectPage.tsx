export default function ConnectPage() {
    return <div>
        <div>
            <h1>Robot</h1>
            <form>
                <label>Waypoint: </label><input></input><br/>
                <label>Username: </label><input></input><br/>
                <label>Password: </label><input></input><br/>
                <button>Connect Robot</button>
            </form>
        </div>
        <div>
            <h1>Dispenser</h1>
            <form>
                <label>IP: </label><input></input><br/>
                <label>Username: </label><input></input><br/>
                <label>Password: </label><input></input><br/>
                <button>Connect Dispenser</button>
            </form>
        </div>
    </div>
}