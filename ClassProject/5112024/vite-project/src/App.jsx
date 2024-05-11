import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [ownerEnum, setOwnerEnum] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        const response1 = await fetch("http://65.108.86.31:8080/sg/private/api/car-type", {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data1 = await response1.json();
        setCarTypes(data1);
        console.log("Car Types:", data1);

        const response2 = await fetch("http://65.108.86.31:8080/sg/private/api/enums?type=OWNERSHIP_ENUM", {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data2 = await response2.json();
        setOwnerEnum(data2);
        console.log("Owner Enums:", data2);

        const response3 = await fetch("http://65.108.86.31:8080/sg/private/api/car-brands", {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data3 = await response3.json();
        setCarBrands(data3);
        console.log("Car Brands:", data3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleBrandChange = (event) => {
    const selectedBrandName = event.target.value;
    setSelectedBrand(selectedBrandName);

    
    const selectedBrandObject = carBrands.find(brand => brand.name === selectedBrandName);

    if (selectedBrandObject) {
      setCarModels(selectedBrandObject.carBrandModels);
    } else {
      setCarModels([]);
    }
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <label>Maşın növü</label>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="">Seçin</option>
            {carTypes.map((type, index) => (
              <option key={index} value={type.value}>{type.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Maşın qrupu</label>
          <select value={selectedGroup} onChange={handleGroupChange}>
            <option value="">Seçin</option>
            {ownerEnum.map((group, index) => (
              <option key={index} value={group.value}>{group.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Maşın markası</label>
          <select value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Seçin</option>
            {carBrands.map((brand, index) => (
              <option key={index} value={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Maşın modeli</label>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Seçin</option>
            {carModels.map((model, index) => (
              <option key={index} value={model.name}>{model.name}</option>
            ))}
          </select>
        </div>
      </Modal>
    </>
  );
}

export default App;
