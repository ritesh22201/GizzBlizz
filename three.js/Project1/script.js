const canvas = document.querySelector('.webgl');

//Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color : 0xf0000});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Sized 

const sizes = {
    width : 800,
    height : 1000
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
scene.add(camera);

//Render 

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})