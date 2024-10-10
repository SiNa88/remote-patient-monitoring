<p align="center"><img width=50% src="./docs/logo/sim-pipe_logo.png"></p>

[![GitHub Issues](https://img.shields.io/github/issues/DataCloud-project/SIM-PIPE.svg)](https://github.com/DataCloud-project/SIM-PIPE/issues)
[![License](https://img.shields.io/badge/license-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# SIM-PIPE

SIM-PIPE generates and simulates a deployment configuration for the final deployment that conforms to the hardware requirements and includes any additional necessary middleware inter-step communication code. Finally, the tool provides a pipeline testing functionality, including a sandbox for evaluating individual pipeline step performance, and a simulator to determine the performance of the overall Big Data pipeline. Specifically, SIM-PIPE provides the following high-level features:

-	Deploying each step of a pipeline and running it in a sandbox by providing sample input
-	Evaluating pipeline step performance by recording and analysing metrics about its execution in order to identify bottlenecks and steps to be optimized
-	Identification of resource requirements for pipeline by calculating step performance per resource used

## Architecture

Please consult the [`ARCHITECTURE.md`](ARCHITECTURE.md) document for more details on the SIM-PIPE architecture.

## Security

SIM-PIPE is designed to only allow trusted users to deploy pipelines.

**DO NOT** expose the SIM-PIPE API to the public Internet without authorising and authentifying your users.

The default installation of SIM-PIPE **IS NOT** secure.
You need to configure the authentication and authorisation mechanisms yourself.

In practice, SIM-PIPE is better to run on your local machine. When port forwarding,
make sure you do not expose the SIM-PIPE API to an untrusted network.
The defaults are set to localhost only.

## Contributing

Before raising a pull request, please read our [contributing guide](CONTRIBUTING.md).

## Core development team

* [Nikolay Nikolov](https://github.com/nvnikolov)
* [Antoine Pultier](https://github.com/fungiboletus)
* [Aleena Thomas](https://github.com/AleenaThomas-gh)
* [Brian Elvesæter](https://github.com/elvesater)
* [Gøran Brekke Svaland](https://github.com/goranbs)

## License

SIM-PIPE is released as open source software under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
