function getAcceleration(properties) {
  let acceleration

  // Using a = F/m
  if (
    properties.f !== undefined &&
    properties.m !== undefined &&
    properties.m !== 0
  ) {
    acceleration = properties.f / properties.m
  }
  // Using a = Δv/Δt
  else if (
    properties.Δv !== undefined &&
    properties.Δt !== undefined &&
    properties.Δt !== 0
  ) {
    acceleration = properties.Δv / properties.Δt
  }
  // Using a = 2d/t^2
  else if (
    properties.d !== undefined &&
    properties.t !== undefined &&
    properties.t !== 0
  ) {
    acceleration = (2 * properties.d) / properties.t ** 2
  }
  // If none of the formulas can be applied
  else {
    return 'impossible'
  }

  return acceleration
}
