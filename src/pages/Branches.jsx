import React from "react";
import "../assets/css/Branches.css";

const branches = [
    {
        title: 'Phoenix Computer - जामखेड',
        address: 'सेंट्रल कॉम्प्लेक्स, नवीन पंचायत समिती समोर, जामखेड.',
        phone: '+91 9209188133',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3778.435607660178!2d75.30619584023955!3d18.734069803094435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPhoenix%20computer%20central%20mall%20jamkhed!5e0!3m2!1sen!2sin!4v1746549753561!5m2!1sen!2sin',
    },
    {
        title: 'Phoenix Computer - कर्जत',
        address: 'काळदाते कॉम्प्लेक्स समोर, मेन रोड, गणेश पेठ, कर्जत',
        phone: '+91 9860876406',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.439226762133!2d75.00597187460673!3d18.554226582545798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc49f1f6a745527%3A0xdbc543b3bc3eb385!2sPhoenix%20Computers%20Karjat!5e0!3m2!1sen!2sin!4v1746549946122!5m2!1sen!2sin',

    },
    {
        title: 'Phoenix Computer - अमळनेर',
        address: 'मेन रोड, अमळनेर',
        phone: '+91 9309723884',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8035251685455!2d75.32547367461754!3d18.940088782236675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4b5000186642f%3A0xa188da7c1ab26aa3!2sphoenix%20computer!5e0!3m2!1sen!2sin!4v1746550086633!5m2!1sen!2sin',
    },
    {
        title: 'Phoenix Computer - पाटोदा',
        address: 'छत्रपती शिवाजी महाराज चौक पाटोदा 414204',
        phone: '+91 9657947413',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3778.435607660178!2d75.30619584023955!3d18.734069803094435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPhoenix%20computer%20central%20mall%20jamkhed!5e0!3m2!1sen!2sin!4v1746549753561!5m2!1sen!2sin',
    },
    {
        title: 'Phoenix Computer - श्रीगोंदा',
        address: 'धनश्री कॉम्प्लेक्स दौंड, जामखेड - श्रीगोंदा रोड, श्रीगोंदा',
        phone: '+91 9067104090',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1427907480006!2d74.69368607460832!3d18.61264618249879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc34339e23ef6b3%3A0x6b68eb50780f1865!2sPhoenix%20computer!5e0!3m2!1sen!2sin!4v1746550570302!5m2!1sen!2sin',

    },
    {
        title: 'Phoenix Computer - लोणी काळभोर, पुणे',
        address: 'एमआयटी कॉर्नर, लोणी स्टेशन, लोणी काळभोर, पुणे.',
        phone: '1234567890',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8773900097285!2d74.02146737460488!3d18.489212182598248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e919f58ab64f%3A0x75d226627cdd1b96!2sPhoenix%20computer!5e0!3m2!1sen!2sin!4v1746550732938!5m2!1sen!2sin',
    },

];
const Branches = () => {
    return (
        <section className="branches">
            <h2>आमच्या शाखा</h2>
            <div className="branches-grid">
                {branches.map((branch, index) => (
                    <div className="branch-card" key={index}>
                        <h3>{branch.title}</h3>
                        <p className="address">{branch.address}</p>
                        <p className="phone">मोबाइल: {branch.phone}</p>
                        <iframe
                            src={branch.mapUrl}
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Branch Map ${index + 1}`}
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Branches;