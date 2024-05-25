

const TableDetail = () => {

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="p-4 text-sm">
                <p className="font-semibold mb-1">Integrated Signatures</p>
                <ul className="list-none hover:list-disc text-sm">
                    <li>
                        <a href="/api/interpro/P5521120/" className="text-blue-600 hover:text-blue-800">PS51120:</a> LDL-receptor class B (LDLRB) repeat profile
                    </li>
                    <li>
                        <a href="/api/interpro/PF00058/" className="text-blue-600 hover:text-blue-800">PF00058:</a> Low-density lipoprotein receptor repeat class B
                    </li>
                    <li>
                        <a href="/api/interpro/SM00135/" className="text-blue-600 hover:text-blue-800">SM00135:</a> Low density lipoprotein YTWD Domain
                    </li>
                </ul>
            </div>
            <div className="bg-gray-100 text-slate-700 p-4 text-sm">
                <p className="font-semibold mb-2">Most recent reference</p>
                <p className="font-normal mb-2 text-gray-600">The LDL receptor-related protein (LRP) family; an old
                    family of proteins with new physiological functions. May P, Woldt E, Matz RL, Boucher P. Ann. Med 39, 219-28, (2007)
                    View article PMID: 17457719 </p>
            </div>
        </div>
    )
};

export default TableDetail;