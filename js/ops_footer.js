document.write(`
<footer class ="py-4 mt-5 bg-body-tertiary">
<div class="container py-5 px-5 my-5 text-body-secondary">
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
    </ul>
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