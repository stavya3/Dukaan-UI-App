
import { Tabletop } from './Tabletop'
import { orderData } from './data'

export const Table = () => {
    return (
        <div className='bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4'>
            <Tabletop />
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-xm font-medium rounded uppercase text-black-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3 font-medium'>ORDER ID</th>
                            <th scope='col' className='px-6 py-3 font-medium'>STATUS</th>
                            <th scope='col' className='px-6 py-3 font-medium'>TRANSACTION ID</th>
                            <th scope='col' className='px-6 py-3 font-medium'>REFUND DATE</th>
                            <th scope='col' className='px-6 py-3 text-right font-medium'>ORDER AMOUNT</th>
                        </tr>
                    </thead>
                    {orderData.map((order) => {
                        return (
                            <tbody>
                                <tr className='bg-white border-b'>
                                    <th scope='row' className='px-6 py-4 font-medium text-blue-700 whitespace-nowrap'>#{order.id}</th>
                                    <td className='px-6 py-4 flex items-center gap-2 text-black-600'>
                                        { (order.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500' /> }
                                        { (order.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-black-500' /> }
                                        { (order.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500' /> }
                                        {order.status}
                                    </td>
                                    <td className='px-6 py-4 text-black-400'>{order.transactionID}</td>
                                    <td className='px-6 py-4 text-black-400'>{order.refundDate}</td>
                                    <td className='px-6 py-4 text-right text-black-600'>{order.amount}</td>
                                </tr>

                            </tbody>
                        )
                    })}
                    
                </table>
            </div>

        </div>
    );
}