'use client'
import {useEffect, useRef} from "react";

function Typewriter() {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.isDeleting = false;
            this.tick();
        };

        TxtType.prototype.tick = function () {
            const i = this.loopNum % this.toRotate.length;
            const fullTxt = this.toRotate[i];

            // Update the text based on whether we're deleting or adding
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

            let delta = 300; // Slower typing speed

            if (this.isDeleting) {
                delta = 150; // Speed up deleting slightly
            }

            // Control the timing for starting/stopping deletion
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period; // Pause at the end of the text
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500; // Pause before starting next word
            }

            setTimeout(() => this.tick(), delta);
        };

        const elements = typewriterRef.current;
        const toRotate = JSON.parse(elements.getAttribute('data-type'));
        const period = elements.getAttribute('data-period');

        if (toRotate) {
            new TxtType(elements, toRotate, period);
        }

        // Inject CSS
        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
        document.head.appendChild(css);

        // Cleanup function
        return () => {
            document.head.removeChild(css);
        };
    }, []);

    return (
        <h1 className="text-7xl">
            <a href="" className="typewrite" data-period="2000" data-type='[ "Full-stack Developer", "Mobile App Developer", "AI/ML Developer" ]' ref={typewriterRef}>
                <span className="wrap"></span>
            </a>
        </h1>
    )
}

export default Typewriter
