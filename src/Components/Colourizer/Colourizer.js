import React, { useRef, useState } from 'react'
import './Colourizer.css'
import user_1 from '../../assets/photo-collage.png.png'
import refresh_icon from '../../assets/reset.png'
// import {useNavigate } from 'react-router-dom'

const Colourizer = () => {

    const inputRef = useRef(null);
    const uploadBtn = useRef(null);

    const initialState = {
        image: user_1,
        selectedFile: null,
        showUpload: true,
        uploadContent: "Upload"
    };


    // const[image,setImage] = useState(user_1);
    // const[selectedFile,setSelectedFile] = useState(null);
    // const[showUpload,setShowUpload] = useState(true);
    // const[uploadcontent,setUploadcontent]=useState("Upload");
    // const navigate = useNavigate();
    const [state, setState] = useState(initialState);

    const handleImageClick = () => {
        inputRef.current.click();
        // setShowUpload(true);
        setState((prevState) => ({
            ...prevState,
            showUpload: true
        }));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // const imageObjectURL = 
        // setImage(URL.createObjectURL(file))
        // setSelectedFile(file)
        setState({
            ...state,
            selectedFile: file,
            image: URL.createObjectURL(file)
        });
    }
    const handleUpload = () => {
        if (!state.selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formdata = new FormData();
        formdata.append('file', state.selectedFile, state.selectedFile.name);

        const requestOptions = {
            method: 'POST',
            body: formdata
        };

        fetch('https://e850-117-222-111-230.ngrok-free.app/', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                uploadBtn.current.disabled = false;
                // setUploadcontent("Upload")
                setState((prevState) => ({
                    ...prevState,
                    uploadContent: "Upload"
                }));
                return response.blob();

            })
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                // setImage(imageObjectURL);
                // setShowUpload(false);
                // setUploadcontent("Upload")
                setState({
                    ...state,
                    uploadContent: "Upload",
                    showUpload: false,
                    image: imageObjectURL
                });
                uploadBtn.current.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to upload image.');
                // setUploadcontent("Upload")
                setState((prevState) => ({
                    ...prevState,
                    uploadContent: "Upload"
                }));
                uploadBtn.current.disabled = false;
            });
        // setUploadcontent("Uploading...")
        setState((prevState) => ({ ...prevState, uploadContent: "Uploading..." }));
        uploadBtn.current.disabled = true;

    };
    // const handleUpload=()=>{
    //     const formdata = new FormData();
    //     formdata.append(
    //         'file',
    //         selectedFile,
    //         selectedFile.name
    //     )

    //     const requestOptions ={
    //         method:'POST',
    //         body : formdata
    //     }
    //     fetch('http://127.0.0.1:8000/',requestOptions).then(
    //         response =>{
    //             if(!response.ok){
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.blob;
    //         })
    //         .then(imageBlob => {
    //           const imageObjectURL = URL.createObjectURL(imageBlob);
    //           setImage(imageObjectURL);
    //         })

    // }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = state.image;
        link.download = 'downloaded_image.png'; // You can set the default file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const changeButton = () => {

        setState(initialState);

    }
    return (
        <div className='upload'>
            <div className='upload-info'>
                <h2>Photo Colourizer</h2>
                <p>Convert black and white photos to color online for free, and turn your old photo into a colorful reality.
                </p>
                <div className='upload-photo-place'>
                    <img src={state.image} alt='' />
                    <div className='upload-dragdrop'>
                        <div className='dragdrop' onClick={handleImageClick}>
                            <h4>Drag image here or click to upload</h4>
                            <input type='file' ref={inputRef} onChange={handleImageChange} />
                        </div>
                        <span className="privacy-note">*All files are stored privately & encrypted. Only you will see them.</span>


                        {
                            state.showUpload ?
                                <button className='btn dark-btn' onClick={handleUpload} ref={uploadBtn}>{state.uploadContent}</button>
                                : <div className="download-reset">
                                    <button className='btn dark-btn' onClick={handleDownload}>Download</button>
                                    <img className='refresh_img' src={refresh_icon} alt='reset' onClick={changeButton} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Colourizer