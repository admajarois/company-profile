import icons from '../../globals/skills';

const skillTemplate=(icon)=> `
    <div class="col p-3 rounded-3 d-flex justify-content-center">
        <img src="${icon.icon}" class="img-thumbnail" alt="icons skills"/>
    </div>
`;

export {skillTemplate};