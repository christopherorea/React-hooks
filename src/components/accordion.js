import React,{useState} from 'react';

const Accordion = ({items})=>{

	const [activeIndex,setActive] = useState(null);

	const onTitleClick = (index)=> {
		setActive(index)
	};

	const renderItems = items.map( (item,index) =>{

		const active = index === activeIndex ? 'active' : '';

		return(
			<React.Fragment key={item.title}>
				<div className={'title ' + active}
				onClick={()=> onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={'content ' + active}>
					{item.content}
				</div>
			</React.Fragment>
		);
	});

	return(
		<div className='ui styled accordion'>
			{renderItems}
		</div>
	);
};

export default Accordion;