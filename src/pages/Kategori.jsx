import { useEffect, useState } from 'react'
import Loading from '../components/loading';
import { getAllCategories } from '../services/KategoriServices';
function Kategori() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // fungsi untuk mengambil data dari endpoint
    const loadData = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await getAllCategories();
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
            setError(
                'Gagal Mengambil data kategori'
            );
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (

        <section>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className=" table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>NO</th>
                                    <th>NAME</th>
                                    <th>DESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index ) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Kategori;