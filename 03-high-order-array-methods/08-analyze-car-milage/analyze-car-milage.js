function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, car) => {
    return (acc += car.mileage);
  }, 0);
  const averageMileage = totalMileage / cars.length;
  const highestMileage = Math.max(...cars.map((car) => car.mileage));
  const lowestMileage = Math.min(...cars.map((car) => car.mileage));
  const highestMileageCar = cars.find((car) => car.mileage === highestMileage);
  const lowestMileageCar = cars.find((car) => car.mileage === lowestMileage);

  console.log({
    totalMileage,
    highestMileageCar,
    lowestMileageCar,
    averageMileage,
  });

  return {
    totalMileage,
    highestMileageCar,
    lowestMileageCar,
    averageMileage,
  };
}

module.exports = analyzeCarMileage;
