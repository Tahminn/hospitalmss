import React from 'react'

function OldClieTable() {
    return (
        
            <div className="col">
                <div className="card card-secondary">
                    <div className="card-header border-1">
                        <h3 className="card-title">Products</h3>
                        <div className="card-tools">
                            <a href="/" className="btn btn-tool btn-sm">
                                <i className="fas fa-download"></i>
                            </a>
                            <a href="/" className="btn btn-tool btn-sm">
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-striped table-valign-middle">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Ad Soyad</th>
                                    <th>Müştəri</th>
                                    <th>Fin veya voen</th>
                                    <th>Kredit istəyi</th>
                                    <th>Kredit Valyuta</th>
                                    <th>Kredit Növü</th>
                                    <th>Status</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody id="SearchTehlilData">
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
        
    )
}

export default OldClieTable