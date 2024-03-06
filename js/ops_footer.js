document.write(`
<footer class ="py-4 mt-5 bg-body-tertiary">
    <div class="container py-5 px-5 my-5 text-body-secondary">
        <div class="row">
            <div class="col-sm instructor-footer">
                <div class="instructor-grid">
                    <div class="intructor-grid-header">
                        <strong>Lead Instructor</strong>
                    </div>
                    <div>
                        Benjamen Bielecki
                    </div>
                    <div>
                        bbieleck@uci.edu
                    </div>
                    <div class="intructor-grid-header">
                        <strong>Lab Supervisor</strong>
                    </div>
                    <div>
                        David Schoening
                    </div>
                    <div>
                        dschoeni@uci.edu
                    </div>
                    <div class="intructor-grid-header">
                        <strong>Lab Instructors</strong>
                    </div>
                    <div>
                        Colton Kaneria	
                    </div>
                    <div>
                        ckaneria@uci.edu
                    </div>
                    <div>
                        Dylan Vu
                    </div>
                    <div>
                        dylancv@uci.edu
                    </div>
                    <div>
                        Gavin Nguyen
                    </div>
                    <div>
                        gavinn2@uci.edu
                    </div>
                    <div>
                        Hannah Briseño
                    </div>
                    <div>
                        hybrisen@uci.edu
                    </div>    
                    <div>
                        Luke Vargas
                    </div>
                    <div>
                        lkvargas@uci.edu
                    </div>
                    <div>
                        Deon Nguyen
                    </div>
                    <div>
                        deonn1@uci.edu
                    </div>
                    <div>
                        Antonio Velasco
                    </div>
                    <div>
                        antonisv@uci.edu
                    </div>
                    </tbody>
                </div>
            </div>
            <div class="col-sm">
                <strong>Resources</strong>
                <ul class="list-unstyled small">
                    <li>Coming Soon...</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <a class="d-inline-flex align-items-center text-decoration-none text-body-secondary mb-2">
                <img class="img-fluid me-2 d-block" style="max-width: 30px;" src="./assets/images/ops_logo_gs_100ppi.png">
                <span class="" style="font-size: 1.2rem;">Open Project Space</span>
            </a>
            <ul class="list-unstyled small">
                <li>
                    Website designed by the 2023-2024 Open Project Space Committee
                </li>
                <li>
                    CC BY-NC-SA 2023 Institute of Electrical and Electronics Engineers, UC Irvine Branch
                </li>
                <br>
                <li>
                    <strong>Fair Use Act Disclaimer</strong>
                    <br>
                    This site is for educational purposes only.
                    <br><br>
                    <strong>Fair Use</strong>
                    <br>
                    Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.
                    Fair use is a use permitted by copyright statute that might otherwise be infringing.
                    <br><br>
                    <strong>Fair Use Definition</strong>
                    <br>
                    Fair use is a doctrine in United States copyright law that allows limited use of copyrighted material without requiring permission from the rights holders, such as commentary, criticism, news reporting, research, teaching or scholarship. It provides for the legal, non-licensed citation or incorporation of copyrighted material in another author’s work under a four-factor balancing test.
                </li>
            </ul>

            <ul class="list-unstyled small">
                <li class="fw-bold">
                    Have Questions? Contact Us
                </li>
                <li>
                    Email | <a href="mailto:ieee@uci.edu">ieee@uci.edu</a>
                </li>
                <li>
                    Lead Instructor | Benjamen Bielecki
                </li>
            </ul>
        </div>
    </div>

    <script>
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {html: true}))

        document.querySelectorAll('.pj-code').forEach(el => {

        hljs.highlightElement(el);
        });
    </script>
</footer>

`)
