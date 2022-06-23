import React, { useState, useEffect } from 'react';
// import '../../assets/style.css';
import OldClieTable from './OldClieTable';
import axios from 'axios';

function OldCliList() {
    const [owners, setOwners] = useState();
    const [rezidents, setRezidents] = useState();

    //State For Search Start
    const [fullname, setFullname] = useState()
    const [voenfin, setVoenfin] = useState()
    const [phone, setPhone] = useState()
    const [hessahibi, setHessahibi] = useState()
    const [rez, setRez] = useState()
    const [id , setId] = useState()
    //State For Search End

    //Get Datas Functions Start
    function loadOwner() {
        axios.get('/api/Listdata/getowner')
            .then((res) => {
                setOwners(res.data)
            })
    }

    function loadRezident() {
        axios.get('/api/Listdata/getresident')
            .then((res) => {
                setRezidents(res.data)
            })
    }
    //Get Datas Funcyons End

     //Search Users Start
     const [users, setUsers] = useState();
     let filteringDatas = {
         id: id,
         adSoyad: fullname,
         finVoen: voenfin,
         telefon: phone,
         owner: hessahibi,
         resident: rez
     }
     function searchUsers(e) {
        
        console.log(filteringDatas);
         e.preventDefault()
         axios.post('/api/Analysis/findolduser', filteringDatas)
             .then(response => setUsers(response.data));
     }
     //Search Users End
 
    
    useEffect(() => {
        loadOwner()
        loadRezident()
    }, []);
    return (
        <div>
            <div className="content-wrapper" style={{ minHeight: "366.225px" }}>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-3">
                                <div className=" form-group">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h5 className="card-title">Filter üzrə axtarış</h5>
                                        </div>

                                        <form onSubmit={(e) => searchUsers(e)} data-ajax="true" data-ajax-method="POST" data-ajax-mode="replace" data-ajax-success="OnSuccessTehlil" data-ajax-update="#SearchTehlilData" id="form0" method="post">                    <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Id nömrəsi</label>
                                                <div className="col-sm-8">
                                                    <input onChange={(e) => setId(e.target.value)} className="form-control text-box single-line"  data-val="true" data-val-number="The field Id must be a number." id="Id" name="Id" type="number" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Ad Soyad</label>
                                                <div className="col-sm-8">
                                                    <input onChange={(e) => setFullname(e.target.value)} className="form-control text-box single-line" id="AdSoyad" name="AdSoyad" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Vöen/Fin</label>
                                                <div className="col-sm-8">
                                                    <input onChange={(e) => setVoenfin(e.target.value)} className="form-control text-box single-line"  id="FinVoen" name="FinVoen" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Telefon</label>
                                                <div className="col-sm-8">
                                                    <input onChange={(e) => setPhone(e.target.value)} className="form-control text-box single-line" id="Telefon" name="Telefon" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Hes/Sahibi</label>
                                                <div className="col-sm-8">
                                                    <select onChange={(e) => setHessahibi(e.target.value)} className="form-control"  defaultValue={"DEFAULT"} data-val="true" data-val-number="The field Owner must be a number." data-val-required="The Owner field is required." id="Owner" name="Owner">
                                                        <option value={"DEFAULT"}>Seçilməyib</option>
                                                        {owners?.map(owner =>
                                                            <option key={owner.id} value={owner.code} >{owner.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Rezidentik</label>
                                                <div className="col-sm-8">
                                                    <select onChange={(e) => setRez(e.target.value)} className="form-control" data-val="true" defaultValue={'2'} data-val-number="The field Resident must be a number." id="Resident" name="Resident">
                                                        {rezidents?.map(rezident =>
                                                            <option key={rezident.id} value={rezident.id}>{rezident.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                            <div className="card-footer">
                                                <div className="form-group row">
                                                    <div className="col-lg-4 col-md-12 col-sm-12 p-2">
                                                        <button type="submit" className="btn btn-sm btn-primary col-12 my-1" id="ReloadTehlil">Filter</button>
                                                        <a className="btn btn btn-sm btn-warning col-12 my-1" id="ClearSearchTehlil" href='/'>Yenilə</a>
                                                    </div>
                                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                                        <div className="form-group row my-2">
                                                            <label className="col-lg-5 col-md-12 col-sm-12">Filter :</label>
                                                            <input className="form-control text-center col-lg-7 col-md-12 col-sm-12 text-box single-line" id="TehlilFiltered" name="Filtered" readOnly="" type="number" />
                                                        </div>
                                                        <div className="form-group row my-2">
                                                            <label className="col-lg-5 col-md-12 col-sm-12">Cəmi :</label>
                                                            <input className="form-control text-center col-lg-7 col-md-12 col-sm-12 text-box single-line" id="TehlilAllCount" name="TehlilAllCount" readOnly="" type="number" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>
                            <OldClieTable user={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OldCliList