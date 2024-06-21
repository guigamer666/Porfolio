// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvKo3FozV3AS-NcTL8jMqCF_dLXEQubPs',
  authDomain: 'mi-porfolio-1d946.firebaseapp.com',
  projectId: 'mi-porfolio-1d946',
  storageBucket: 'mi-porfolio-1d946.appspot.com',
  messagingSenderId: '917615957603',
  appId: '1:917615957603:web:c910acbf646406743f0a56',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Obtén una referencia al almacenamiento
const storage = getStorage(app);

const folders = [
  {
    folderName: 'gestorcitas',
    imageNames: ['primera.PNG', 'cuarta.PNG', 'segunda.PNG'],
  },
  {
    folderName: 'gestorinventario',
    imageNames: [
      'login.PNG',
      'crearUsuario.PNG',
      'PanelAdministracion.PNG',
      'proveedores.PNG',
      'Productos.PNG',
      'Pedidos.PNG',
      'HistorialPedidos.PNG',
      'HistorialProductos.PNG',
      'Carrito.PNG',
      'donar.PNG',
    ],
  },
  {
    folderName: 'gestortareas',
    imageNames: [
      'Login.PNG',
      'Registro.PNG',
      'paginaDondeAccedes.PNG',
      'primeraImagenProyecto.PNG',
    ],
  },
  {
    folderName: 'glucontrol',
    imageNames: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', 'movil.png'],
  },
  {
    folderName: 'introASP',
    imageNames: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG', '6.PNG'],
  },
];

export const getImageUrls = async () => {
  const allImageUrls: { [key: string]: string[] } = {};

  for (const folder of folders) {
    const { folderName, imageNames } = folder;
    const imageUrls: string[] = [];

    for (const name of imageNames) {
      const imageReference = ref(storage, `${folderName}/${name}`);

      try {
        const url = await getDownloadURL(imageReference);
        imageUrls.push(url);
      } catch (error) {
        console.log(error);
      }
    }

    allImageUrls[folderName] = imageUrls;
  }

  return allImageUrls;
};
