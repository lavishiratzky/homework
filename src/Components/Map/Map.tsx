import "./Map.css";

function Map(): JSX.Element {
    return (
        <div className="Map">
			<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1932472133726!2d34.788780621719546!3d32.06402158128513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2z15In15XXnyDXkdeo15nXmdehINeU15PXqNeb15QgLSDXnNeZ157XldeT15kg15TXmdeZ15jXpyAtINeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1677592594063!5m2!1siw!2sil" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;
