const canvas = document.querySelector('.webgl');

//Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xf0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sized 

const sizes = {
    width: 800,
    height: 1000
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

//Render 

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);










function abc(a) {
    return function foo(b) {
        return function fun(c) {
            return function greet(d) {
                return a + b + c + d;
            };
        }
    }
}

console.dir(abc(4)(3)(2));