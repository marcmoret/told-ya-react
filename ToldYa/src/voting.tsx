import { Outlet, useParams } from "react-router-dom";

export default function Voting () {
    const voting = useParams<{ votingId: string }>();
    return (
        <div className="voting">Voting Page: {voting.votingId} <Outlet /></div>
    );
}