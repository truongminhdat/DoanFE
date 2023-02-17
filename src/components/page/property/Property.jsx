
import Logo from "../../../assets/anhdalat.jpg"
import useFetch from "../../hooks/useFetch"
import './property.css'
const PropertyList = () => {
    const {data, loading, error} = useFetch("hotel/countHotel")
    return(
        <div className='pList'>
            {loading ? (
                "loading"
            ): (
                <>
                {data && data.map(item => (
                     <div className='pListItem'>
                     <img src={Logo}/>
                     <div className="flex justify-between items-center">
                        <div className='plistTitle'>
                            <h1>{item.type}</h1>
                            <h2>{item.count}{item.type}</h2>
                        </div>
                        <div>1230%</div>
                     </div>
                     
                     </div>
                ))}
                </>
            )}
                    <div className="pList">
                        <div className="pListItem">
                            <img src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M" />
                            <div className="flex justify-between items-center">
                                <div className="pListTitle">
                                    <h1>Hotels</h1>
                                    <h1>221 hotels</h1>
                                </div>
                                <div>15%</div>
                            </div>
                        </div>
                    </div>

                    <div className="pList">
                        <div className="pListItem">
                            <img src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M" />
                            <div className="flex justify-between items-center">
                                <div className="pListTitle">
                                    <h1>Hotels</h1>
                                    <h1>221 hotels</h1>
                                </div>
                                <div>15%</div>
                            </div>
                        </div>
                    </div>

                    <div className="pList">
                        <div className="pListItem">
                            <img src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M" />
                            <div className="flex justify-between items-center">
                                <div className="pListTitle">
                                    <h1>Hotels</h1>
                                    <h1>221 hotels</h1>
                                </div>
                                <div>15%</div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default PropertyList