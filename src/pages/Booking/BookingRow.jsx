
const BookingRow = ({ booking }) => {
    const { date, service, price, img } = booking;
    return (
        <tr>
            <th>
                <button className="btn btn-square btn-sm ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs bg-green-400">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;