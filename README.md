# Nasa Jump The Gun App

# IONIC NOTE

- add platform `ionic cordova platform add ios`
- remove platform `ionic cordova platform remove ios`
- when add some plugin or modify `config.xml` must be `repaire` or `add and remove` platform
- if some problem occur, you can remove `node_modules` and re-install, or remove platform and re-add
- run with browser server `ionic serve`
- when add new ios platfrom, you must open Xcode and change `Deployment Target` and `Team`
- use `prepare` and then use Xcode to deploy can more quickly and debbuger process.
- command line to deploy ios `ionic cordova run ios --buildFlag='-UseModernBuildSystem=0'`(usually throw error)
- carefully the codes are last version after building.
