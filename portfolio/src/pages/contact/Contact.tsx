    import './style.css';

    export const Contact = () => {
    return (
    <div className="bg-[var(--color-lux)] w-screen min-h-min px-8 md:px-12 lg:px-16 py-10 flex flex-col justify-around">
        <h2 className="text-center mb-5 text-4xl font-bold lg:mb-2 text-[var(--color-red)] md:text-6xl lg:text-7xl lg:text-left pt-24">
            Contact
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center leading-6 md:pt-5 lg:pt-8 lg:text-left">
            I hope you enjoyed my portfolio and I look forward to hearing from you! Let’s work together!
        </p>
        <div className="flex flex-col bg-[var(--color-red)] mt-10 rounded-lg shadow-sm shadow-black lg:flex-row lg:items-center lg:justify-center md:pt-30 lg:pt-0">
            <div className=" mt-10 mx-4 md:mx-20 p-6 bg-white md:p-10 rounded-lg shadow-sm shadow-red-50 lg:my-0 lg:px-15 md:mb-10 md:mt-0">
            <div className="space-y-6">
                {[
                {label: 'Correo', value: 'itsyix21@gmail.com', icon: '/icons/envelope.png' },
                {label: 'Instagram',value: '@nnauxiy_', icon: '/icons/instagram.png' },
                { label: 'Telephone', value: '+34631635669', icon: '/icons/whatsapp.png'},
                {label: 'Discord', value: 'bluucream', icon: '/icons/discord.png'}
                ].map(({ label, value, icon }) => (
                <div key={label} className="flex items-center space-x-3 text-sm md:text-xl lg:text-[1.35rem] text-[var(--color-red)]">
                    <img src={icon} alt={label} className="imge" />
                    <span><strong>{label}:</strong></span>
                    <span>{value}</span>
                </div>
                ))}
            </div>
            </div>
            <div className="contact-container min-h-screen lg:pt-30">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left border-2 border-white p-5 md:p-10 lg:mr-20">
                <div className="contact-left-title uppercase">
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-center">Let´s get in touch!</h2>
                <hr />
                </div>
                <input 
                type="hidden"
                name="access_key" 
                value="4087ebc0-15e2-45a8-b733-8145c8c28973"
                />
                <input
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-input"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Your email"
                className="contact-input"
                required
                />
                <textarea
                name="message"
                placeholder="Your message"
                className="contact-input"
                required
                />
                <button type="submit" className="submit-btn">
                Send
                <img className="w-5 ml-2" src="/images/hr.png" alt="Heart Icon" />
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    };
