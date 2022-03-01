const improveImageExtensionUrl = (url: string, newExtension: number) => {
  const imageExtensionRegex = /\d+x\d+/gm

  return url.replace(imageExtensionRegex, `${newExtension}x${newExtension}`)
}

export default improveImageExtensionUrl