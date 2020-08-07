import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({label,options,selected,onSelectedChanged})=>{

	const [open,setOpen] = useState(false);
	
	const ref = useRef();

	const onBodyclick = (event)=>{
		if(ref.current.contains(event.target)){
			return;
		}
		setOpen(false);
	};

	useEffect(()=>{
		document.body.addEventListener('click',onBodyclick);

		return ()=>{
			document.body.removeEventListener('click',onBodyclick);
		}
	},[]);

	const renderOptions = options.map(option=>{

		if(option.value ===  selected.value){
			return null
		}
			return(
				<div 
				key={option.value} 
				className='item'
				onClick={()=> onSelectedChanged(option)}>
					{option.label}
				</div>
			);
	});

	return(
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label className='label'>
					{label}
				</label>
				<div 
				onClick = {()=> setOpen(!open)}
				className={`ui selection dropdown ${open ? 'visible active': ''}`}>
					<i className='dropdown icon'></i>
					<div className='text'>
						{selected.label}
					</div>
					<div 
					className= {`menu ${open ? 'visible transition' : ''}`}>
						{renderOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;