import './Explorer.css'
//Explorer IMG
import explorer01 from '../../assets/explorer/explorer01.png'
import explorer02 from '../../assets/explorer/explorer02.png'
import explorer03 from '../../assets/explorer/explorer03.png'
import explorer04 from '../../assets/explorer/explorer04.png'
import explorer05 from '../../assets/explorer/explorer05.png'
import explorer06 from '../../assets/explorer/explorer06.png'
import explorer07 from '../../assets/explorer/explorer07.png'
import explorer08 from '../../assets/explorer/explorer08.png'
import explorer09 from '../../assets/explorer/explorer09.png'

export function Explorer() {
    return (
        <main className="explorer">
            <img src={explorer01} alt="explorer01" />
            <img src={explorer02} alt="explorer02" />
            <img src={explorer03} alt="explorer03" />
            <img src={explorer04} alt="explorer04" />
            <img src={explorer05} alt="explorer05" />
            <img src={explorer06} alt="explorer06" />
            <img src={explorer07} alt="explorer07" />
            <img src={explorer08} alt="explorer08" />
            <img src={explorer09} alt="explorer09" />
        </main>
    )
}