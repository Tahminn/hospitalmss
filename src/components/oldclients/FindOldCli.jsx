import React, { useState, useEffect } from 'react';
// import '../../assets/style.css';
import axios from 'axios';
import UserInfo from '../userinfo/UserInfo';


function FindOldCli() {
    //Set Datas Start
    const [filials, setFilials] = useState();
    const [rezidents, setRezidents] = useState();
    const [owners, setOwners] = useState();
    //Set Datas End
    //UserInfo Start
    const [regnomdata, setregnomData] = useState()
    const [licschLists, setLicschLists] = useState()
    const [userInfo, setUserInfo] = useState()
    //UserInfo End
    //State For Search Start
    const [fullname, setFullname] = useState()
    const [regnom, setRegnom] = useState()
    const [hesab, setHesab] = useState()
    const [voenfin, setVoenfin] = useState()
    const [phone, setPhone] = useState()
    const [filial, setFilial] = useState()
    const [hessahibi, setHessahibi] = useState()
    const [rez, setRez] = useState()
    //State For Search End


    //Get Datas Functions Start
    function loadFilial() {
        axios.get('/api/Listdata/getfilal')
            .then((res) => {
                setFilials(res.data)
            })
    }

    function loadRezident() {
        axios.get('/api/Listdata/getresident')
            .then((res) => {
                setRezidents(res.data)
            })
    }

    function loadOwner() {
        axios.get('/api/Listdata/getowner')
            .then((res) => {
                setOwners(res.data)
            })
    }
    //Get Datas Functions End

    //Search Users Start
    const [users, setUsers] = useState();
    let filteringDatas = {
        adSoyad: fullname,
        regnom: regnom,
        finVoen: voenfin,
        hesab: hesab,
        telefon: phone,
        owner: hessahibi,
        filial: filial,
        resident: rez
    }
    function searchUsers(e) {
        
        e.preventDefault()
        axios.post('api/Analysis/findolduser', filteringDatas)
            .then(response => setUsers(response.data));
    }
    //Search Users End



    //Get User By RegNom Start
    function getUser(regnom, filialnumber) {
        setFilial(filialnumber)
        setRegnom(regnom)
        let data = {
            regnom: regnom,
            filialnumber: filialnumber
        }
        if (data != null) {
            axios.post('api/Analysis/returnlicsch', data)
                .then(response => {
                    setregnomData(response.data.regnomData)
                    setLicschLists(response.data.licschLists)
                });
        }
    }
    //Get User By Regnom End
    function getUserInfo() {

        let data = {
            regnom: '003700',
            filialnumber: 0
        }

        if (data != null) {
            axios.post('api/Analysis/getolduser', data)
                .then(response => {
                    setUserInfo(response.data)
                    
                });
        }
    }
    
    useEffect(() => {
        loadFilial()
        loadRezident()
        loadOwner()
    }, []);

    return (
        <div>
            <div className="content-wrapper" style={{ minHeight: "366.225px", overflow: 'hidden' }} >
                <div className="content row">
                    <div className=" col-12 form-group ">
                        <div className="card">
                            <div className="card-body table-responsive p-0" style={{ height: '200px', overflow: 'scroll' }} >
                                <table className="table table-bordered table-hover table-head-fixed text-nowrap table-xs" id="ClientChange" style={{ overflow: 'scroll' }}>
                                    <thead>
                                        <tr>
                                            <th>Filial</th>
                                            <th>Reqnom</th>
                                            <th>Hesab Sahibi</th>
                                            <th>Adı Soyadı</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.regData.map(user =>
                                            <tr onClick={() => getUser(user.regnom, user.filialnumber)} key={user.regnom} style={{ cursor: 'pointer' }}>
                                                <th>{user.filialName}</th>
                                                <th>{user.regnom}</th>
                                                <td>Məlum deyil </td>
                                                <td>{user.fullName}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className=" col-4">
                        <div className=" form-group">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h5 className="card-title">Filter üzrə axtarış</h5>
                                </div>
                                <form onSubmit={(e) => searchUsers(e)} >
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Ad Soyad</label>
                                            <div className="col-sm-8">
                                                <input className="form-control text-box single-line" id="AdSoyad" name="AdSoyad" type="text" onChange={(e) => setFullname(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Regnom</label>
                                            <div className="col-sm-8">
                                                <input className="form-control text-box single-line" id="Regnom" name="Regnom" type="text" onChange={(e) => setRegnom(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Hesab</label>
                                            <div className="col-sm-8">
                                                <input className="form-control text-box single-line" id="Telefon" name="Telefon" type="text" onChange={(e) => setHesab(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Vöen/Fin</label>
                                            <div className="col-sm-8">
                                                <input className="form-control text-box single-line" id="FinVoen" name="FinVoen" type="text" onChange={(e) => setVoenfin(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Telefon</label>
                                            <div className="col-sm-8">
                                                <input className="form-control text-box single-line" id="Telefon" name="Telefon" type="text" onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Filial </label>
                                            <div className="col-sm-8">
                                                <select onChange={(e) => setFilial(e.target.value)} className="form-control" defaultValue={"DEFAULT"} data-val="true" data-val-number="The field Filial must be a number." id="Filial" name="Filial">
                                                    <option value={"DEFAULT"}>Seçilməyib</option>
                                                    {filials?.map(filial =>
                                                        <option key={filial.id} value={filial.id}>{filial.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Hes/Sahibi</label>
                                            <div className="col-sm-8">
                                                <select className="form-control" onChange={(e) => setHessahibi(e.target.value)} defaultValue={"DEFAULT"} data-val="true" data-val-number="The field Owner must be a number." data-val-required="The Owner field is required." id="Owner" name="Owner">
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
                                                <select className="form-control" onChange={(e) => setRez(e.target.value)} defaultValue={"DEFAULT"} data-val="true" data-val-number="The field Resident must be a number." id="Resident" name="Resident">
                                                    <option value={"DEFAULT"}>Seçilməyib</option>
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
                                                <button type="submit" className="btn btn-sm btn-primary col-12 my-1">Axtarış</button>
                                                <a href='/' className="btn btn btn-sm btn-warning col-12 my-1" id="ClearSearch">Yenilə</a>
                                            </div>
                                            <div className="col-lg-8 col-md-12 col-sm-12">
                                                <div className="form-group row my-2">
                                                    <label className="col-lg-5 col-md-12 col-sm-12">Filter :</label>
                                                    <input className="form-control text-center col-lg-7 col-md-12 col-sm-12 text-box single-line" data-val="true" data-val-number="The field Filtered must be a number." data-val-required="The Filtered field is required." id="Filtered" name="Filtered" readOnly="@readOnly" type="number" value={users?.countAll} />
                                                </div>
                                                <div className="form-group row my-2">
                                                    <label className="col-lg-5 col-md-12 col-sm-12">Cəmi :</label>
                                                    <input className="form-control text-center col-lg-7 col-md-12 col-sm-12 text-box single-line" data-val="true" data-val-number="The field AllCount must be a number." data-val-required="The AllCount field is required." id="AllCount" name="AllCount" readOnly="@readOnly" type="number" value={users?.filtered} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-6 text-right">
                                    <button onClick={(e) => getUserInfo(e)} className="btn btn-primary" type="submit">
                                        <i className="fa fa-users"></i>
                                        Qəbul et
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="form-group">
                            <div id="LicschList">
                                <div className="col-12 col-md-12 col-sm-12">
                                    <div className="card card-warning">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label text-sm">Hesab Sahibi</label>
                                                        <div className="col-4">
                                                            <input className="form-control text-bold  text-success text-box single-line" id="RegnomData_Owner" name="RegnomData.Owner" type="text" value={regnomdata?.owner} />
                                                        </div>
                                                        <div className="col-4">
                                                            <input className="form-control text-box single-line" id="RegnomData_Neresident" name="RegnomData.Neresident" type="text" value={regnomdata?.neresident} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label text-danger">Ad Soyad</label>
                                                        <div className="col-sm-8">
                                                            <input className="form-control text-danger  text-bold text-box single-line" id="RegnomData_FullName" name="RegnomData.FullName" type="text" value={regnomdata?.fullName} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Dogum tarixi </label>
                                                        <div className="col-sm-8">
                                                            <input className="form-control text-danger  text-bold text-box single-line" id="RegnomData_Birthdate" name="RegnomData.Birthdate" type="text" value={regnomdata?.birthday} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Vöen/Fincode</label>
                                                        <div className="col-sm-8">
                                                            <input className="form-control text-box single-line" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Ünvan</label>
                                                        <div className="col-sm-8">
                                                            <input className="form-control text-box single-line" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <div className="form-group">
                                                <div className="table-responsive p-0" style={{ maxHeight: "250px" }}>
                                                    <table className="table table-bordered table-hover table-head-fixed text-nowrap table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th>Val</th>
                                                                <th>Hesab</th>
                                                                <th>Növü</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {licschLists?.map(hes =>
                                                                <tr>
                                                                    <th>{hes?.currency}</th>
                                                                    <th>{hes?.licsch}</th>
                                                                    <td className="bg-lightblue">{hes?.tiplicsh}</td>
                                                                </tr>
                                                            )}

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <UserInfo userinfo={userInfo} />
        </div>
    )
}

export default FindOldCli