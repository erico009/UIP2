import { ProgressBar } from "react-bootstrap";
const TrackOrder = () => {
    const now=60;
    const message=`Order is being made`;
    return(<div className='container-md'><h1 class='mx-5'>Track Order</h1>
        <div className='container'><ProgressBar now={now} label={message} /></div>
        </div>
    );
}

export default TrackOrder;