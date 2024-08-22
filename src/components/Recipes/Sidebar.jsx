import PropTypes from 'prop-types';
import './Sidebar.css'

const Sidebar = ({cook, wannaCook, handleWannaCook}) => {

    return (
        <div>
            <div className='rounded-xl p-5 border border-zinc-300 gap-6 h-[600px] overflow-y-scroll sticky top-12 '>
                <div>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl'>Want to Cook: {cook.length}</h3>
                        <hr className='my-4' />
                    </div>
                    <div>
                        <table className='w-full'>
                            <tr>
                                <th className='w-[7%]'>SL</th>
                                <th className='w-[58%]'>Recipe Name</th>
                                <th className='w-[35%]'>Wanna Cook</th>
                            </tr>
                            {
                                cook.map((cook, idx)=>
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{cook.name}</td>
                                        <td><button onClick={()=> handleWannaCook(cook)} className='btn w-32 bg-indigo-400 text-white hover:text-zinc-900' type="button">Prepare</button></td>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl'>Currently Cooking: {wannaCook.length}</h3>
                        <hr className='my-4' />
                    </div>
                    <div>
                        <table className='w-full'>
                            <tr>
                                <th className='w-[10%]'>SL</th>
                                <th className='w-[60%]'>Recipe Name</th>
                                <th className='w-[30%]'>Cooking</th>
                            </tr>
                            {
                                wannaCook.map((cook, idx)=>
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{cook.name}</td>
                                        <td><button className='btn w-32 bg-emerald-500 text-white hover:text-zinc-900' type="button">Cooking...</button></td>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    cook: PropTypes.any,
    count: PropTypes.any,
    wannaCook: PropTypes.any,
    handleWannaCook: PropTypes.any,


};

export default Sidebar;