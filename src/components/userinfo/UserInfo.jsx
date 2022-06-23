import React from 'react'

function UserInfo(params) {
    
    return (
        <div>
            <form style={{marginTop:'300px'}}>

                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group  info-box  row">
                                <div className="col col-8">
                                    <div className="form-group row">
                                        <label className="col col-form-label">Müştəri</label>
                                        <div className="col col-sm-7">
                                            <select className="form-control" defaultValue={"DEFAULT"} data-val="true" data-val-required="Müştərinin tipi qeyd edilməlidir !" id="OWNER" name="OWNER">
                                                <option value="DEFAULT">Qeyd edilməyib</option>
                                                <option value="F">Fiziki Şəxs</option>
                                                <option value="Y">Hüquqi Şəxs</option>
                                                <option value="S">Sahibkar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col col-form-label">Müştəri Adı</label>
                                        <div className="col col-sm-7">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Ad 30 simvol olmalıdır!!!" data-val-length-max="30" data-val-required="Müştəri Adı qeyd edilməlidir !" id="ADI" name="ADI" type="text" value={params.userinfo?.adi} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col  col-form-label">Müştəri Soyadı</label>
                                        <div className="col col-sm-7">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Soyadı 30 simvol olmalıdır!!!" data-val-length-max="30" id="SOYADI" name="SOYADI" type="text" value={params.userinfo?.soyadi} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col col-form-label">Ata Adı </label>
                                        <div className="col col-sm-7">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Ata adı 30  simvol olmalıdır!!!" data-val-length-max="30" id="ATA_ADI" name="ATA_ADI" type="text" defaultValue={params.userinfo?.atA_ADI} />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group col col-4 body-content">
                                    <div className="text-center">

                                        <img className="profile-user-img img-fluid img-circle" name="IMAGE" src={`data:image/jpeg;base64,${params.userinfo?.image}`} alt="" />
                                    </div>
                                </div>
                            </div>



                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Doğum tarixi</label>
                                <div className="col-sm-9">
                                    <input className="form-control datetimepicker-input text-box single-line" data-val="true" data-val-date="The field DOGUM_TARIXI must be a date." id="DOGUM_TARIXI" name="DOGUM_TARIXI" type="date"  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Sənədin tipi</label>
                                <div className="col-sm-9">
                                    <select className="form-control" data-val="true" defaultValue={"S"} data-val-required="Sənədin tipi qeyd edilməlidir !" id="SENED_TIP" name="SENED_TIP">
                                        <option value="S">Şəxsiyyət vəsiqəsi</option>
                                        <option value="P">Passport</option>
                                        <option value="V">Sürücülük vəsiqəsi</option>
                                        <option value="H">Hərbi bilet</option>
                                        <option value="D">Diger</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Seriya / nömrəsi </label>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Sənədin seriyası 8 simvol olmalıdır!!!" data-val-length-max="8" id="SENED_SERIA" name="SENED_SERIA" type="text" value="" />
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Sənədin nömrəsi 8 simvol olmalıdır!!!" data-val-length-max="8" id="SENED_NOMRE" name="SENED_NOMRE" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Sened verilmə tar</label>
                                <div className="col-sm-9">
                                    <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                        <input className="form-control datetimepicker-input text-box single-line" data-val="true" data-val-date="The field SENED_VER_TARIXI must be a date." datatarget="#reservationdate" id="SENED_VER_TARIXI" name="SENED_VER_TARIXI" type="date" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Sənəd bitmə tar</label>
                                <div className="col-sm-9">
                                    <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                        <input className="form-control datetimepicker-input text-box single-line" data-val="true" data-val-date="The field SENED_BITME_TARIXI must be a date." datatarget="#reservationdate" id="SENED_BITME_TARIXI" name="SENED_BITME_TARIXI" type="date" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Sənəd verən orqan</label>
                                <div className="col-sm-9">
                                    <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                        <input className="form-control text-box single-line" id="SENED_VER_ORGAN" name="SENED_VER_ORGAN" type="text" value="" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Vətəndaşlıq / ölkə</label>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <input className="form-control text-box single-line" id="VETENDASHLIQ" name="VETENDASHLIQ" type="text" value="" />
                                        </div>
                                        <div className="col-sm-3">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Ölkə kodu COUNTRYCODE simvol olmalıdır!!!" data-val-length-max="3" data-val-required="Ölkə kodu  qeyd edilməlidir !" id="COUNTRYCODE" name="COUNTRYCODE" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Vöen  / Fin kod</label>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <input className="form-control text-box single-line" id="VOEN" name="VOEN" type="text" value="1300017201" />
                                        </div>
                                        <div className="col-sm-3">
                                            <input className="form-control text-box single-line" data-val="true" data-val-length="Fin kod 7 simvol olmalıdır!!!" data-val-length-max="7" id="FINKOD" name="FINKOD" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col col-form-label">Qeydiyyat ünvanı</label>
                                <div className="col-sm-9">
                                    <input className="form-control text-box single-line" data-val="true" data-val-required="Qeydiyyat ünvanı qeyd edilməlidir !" id="QEYDIYYAT_UNVANI" name="QEYDIYYAT_UNVANI" type="text" value="" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col col-form-label">Yaşayış ünvanı</label>
                                <div className="col-sm-9">
                                    <input className="form-control text-box single-line" id="YASHADIGI_UNVAN" name="YASHADIGI_UNVAN" type="text" value="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">

                            <div className="form-group row bg-gradient-dark text-right p-2">
                                <button className=" col btn btn-warning btn-sm" type="submit"> Məlumatı Yadda saxla</button>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Ailə vəz / ginsi</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <input className="form-control text-box single-line" id="AILE_VEZ" name="AILE_VEZ" type="text" value="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <select name="GENDER" defaultValue={"M"} className="form-control">
                                                <option value="M">Kişi</option>
                                                <option value="F">Qadın</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Təhsili/Iş yeri</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <select className="form-control" defaultValue={"DEFAULT"}  id="TEHSIILI" name="TEHSIILI">
                                                <option value="DEFAULT">Seçilməyib</option>
                                                <option value="Natamam Orta">Natamam Orta</option>
                                                <option value="Orta">Orta</option>
                                                <option value="Texnikum">Texnikum</option>
                                                <option value="Ali Bakalavr">Ali Bakalavr</option>
                                                <option value="Ali Magist">Ali Magist</option>
                                                <option value="Alim">Professor/Alim</option>
                                            </select>
                                            <span className="field-validation-valid text-danger" data-valmsg-for="TEHSIILI" data-valmsg-replace="true"></span>
                                        </div>
                                        <div className="col-sm-8">
                                            <input className="form-control text-box single-line" id="ISH_YERI" name="ISH_YERI" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Tutduğu vəzifə</label>
                                <div className="col-sm-8">
                                    <input className="form-control text-box single-line" id="TUTTUGU_VEZIFE" name="TUTTUGU_VEZIFE" type="text" value="" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">İş stajı / Əmək haqqı</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input className="form-control text-box single-line" data-val="true" data-val-number="The field ISH_STAJI must be a number." id="ISH_STAJI" name="ISH_STAJI" type="number" value="" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="form-control text-box single-line" data-val="true" data-val-number="The field EMEK_HAQQI must be a number." id="EMEK_HAQQI" name="EMEK_HAQQI" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row" style={{alignItems:"center"}}>
                                <label className="col-sm-4 col-form-label">Əlavə gəlir / Xərcləri</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input className="form-control text-box single-line" data-val="true" data-val-number="The field ELAVE_GELIR must be a number." id="ELAVE_GELIR" name="ELAVE_GELIR" type="text" value="0.00" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="form-control text-box single-line" data-val="true" data-val-number="The field XERCLERI must be a number." id="XERCLERI" name="XERCLERI" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card card-warning card-outline">
                                <div className="card-header input-group row">
                                    <span className="text-md ">
                                        <i className="fa fa-phone-square"></i>
                                        Telefon Nömrələri
                                    </span>
                                    <div className="col  text-right">
                                        <a href="/" onclick="addPhoneDiv()" className="btn btn-sm btn-dark"> Yeni Nömrə əlavə et</a>
                                    </div>
                                </div>
                                <div className="card-body" id="phoneNum">
                                    <div className="input-group" id="phone1">
                                        <label className="col  col-form-label">Telefon nöm 1:</label>
                                        <div className="col-sm-8  row">
                                            <div className="col-sm-6  input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(+999 99) 999-99-99&quot;" data-mask="" name="CLIENT_PHONES[0].PHONENUMBER" id="CLIENT_PHONES[0].PHONENUMBER" inputMode='text' />
                                            </div>
                                            <div className="col-sm-6">
                                                <input className="form-control text-box single-line" id="CLIENT_PHONES_0__PHONEOWNER" name="CLIENT_PHONES[0].PHONEOWNER" placeholder="Mobil Nömrə və ya Qohum " type="text" value="" />
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <input type="hidden" value="1" id="PhoneCountId" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </form>
        </div>
    )
}

export default UserInfo