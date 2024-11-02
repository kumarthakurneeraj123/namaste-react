import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Opps!!</h2>
            <h3>Something went wrong</h3>
            <h4>
                {err.status}: {err.statusText}
            </h4>
            <h5>
                {err.error.message}
            </h5>
            <h6>
                {err.error.stack}
            </h6>
        </div>
    );
}

export default Error;